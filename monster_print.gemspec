# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "monster_print"
  spec.version       = "0.1.1"
  spec.authors       = ["Abdallah-MIRI"]
  spec.email         = ["abdallah@example.com"]

  spec.summary       = "A Jekyll theme for Monster Print Store."
  spec.homepage      = "https://abdallah-miri.github.io/monster_print/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
