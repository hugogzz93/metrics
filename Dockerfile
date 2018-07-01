FROM ruby:2.5.1-slim
LABEL maintainer 'Hugo González <pinelo93@gmail.com>'

ENV TZ=America/Monterrey
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV PHANTOM_JS="phantomjs-1.9.8-linux-x86_64"

RUN apt-get update -qq && apt-get install -y -qqq --no-install-recommends \
    build-essential apt-utils git gnupg gnupg2 gnupg1 nodejs libpq-dev openssh-server phantomjs \
    rsync locales locales-all chrpath libssl-dev libxft-dev libxslt-dev libfreetype6 libfreetype6-dev \
    libfontconfig1 libfontconfig1-dev curl qt5-default libqt5webkit5-dev libxml2-dev libcurl4-openssl-dev \
    gstreamer1.0-plugins-base gstreamer1.0-tools gstreamer1.0-x && \
    curl -L -O https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2 && \
    tar xvjf $PHANTOM_JS.tar.bz2 && \
    mv $PHANTOM_JS /usr/local/share && \
    ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin && \
    mkdir -p /root/.phantomjs/2.1.1/x86_64-linux/bin && \
    ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /root/.phantomjs/2.1.1/x86_64-linux/bin/phantomjs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# # Setup for ssh onto git.ukko.mx
# RUN mkdir /root/.ssh
# COPY ssh /root/.ssh

# RUN chmod 700 /root/.ssh/id_rsa
# RUN chmod 700 /root/.ssh/id_rsa.pub
# RUN chmod 700 /root/.ssh/known_hosts

# Setup for project local
ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install

COPY . .
