# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( model.css )
Rails.application.config.assets.precompile += %w( model.js )
Rails.application.config.assets.precompile += %w( materialize.min.js )
Rails.application.config.assets.precompile += %w( materialize.min.css )
#Rails.application.config.assets.precompile += %w( graph.js )
Rails.application.config.assets.precompile += %w( graph.css )
Rails.application.config.assets.precompile += %w( googleGraphs.js )
Rails.application.config.assets.precompile += %w( .svg .eot .woff .ttf)





# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
