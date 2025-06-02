# frozen_string_literal: true

# Load compatibility layer for Ruby 3.4+
require_relative "arbutus-theme/compat"

# Main theme module
module ArbutusTheme
  VERSION = "0.1.0"
end

# Require theme assets and layouts
require "jekyll"
