# frozen_string_literal: true

# Add compatibility for Ruby 3.4+ which removed the tainted? method
if RUBY_VERSION >= "3.4.0"
  class String
    def tainted?
      false
    end
    
    def untaint
      self
    end
  end
end
