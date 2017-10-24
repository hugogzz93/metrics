class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.by_date(date, scope, date_attribute=:created_at)
    where(date_attribute.to_sym => date.method("beginning_of_#{scope}").call..
                      date.method("end_of_#{scope}").call)
  end
end
