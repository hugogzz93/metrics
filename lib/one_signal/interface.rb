require 'URI'
require 'net/http'


module OneSignal
  class Interface
    def init
    end

    def send_notification(params)
      @uri = URI.parse('https://onesignal.com/api/v1/notifications')
      params['app_id'] = "1c00fa72-c932-410d-85be-20213f89328b"
      http = Net::HTTP.new(@uri.host, @uri.port)
      http.use_ssl = true
      request = Net::HTTP::Post.new(@uri.path,
                                    'Content-Type'  => 'application/json;charset=utf-8',
                                    'Authorization' => "Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj")
      request.body = params.as_json.to_json
      response = http.request(request)
      puts response.body
    end
  end
end
