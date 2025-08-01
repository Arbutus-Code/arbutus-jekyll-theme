# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "arbutus-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Arbutus Code"]
  spec.email         = ["info@arbutuscode.ca"]

  spec.summary       = "A modern, brand-agnostic Jekyll theme with multiple templates"
  spec.homepage      = "https://github.com/Arbutus-Code/arbutus-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|lib|LICENSE|README)!i) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "liquid", ">= 4.0.4"
  spec.add_development_dependency "bundler", "~> 2.3"
end
