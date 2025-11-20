require 'json'

module Jekyll
  class SearchIndexGenerator < Generator
    priority :lowest
    def generate(site)
      entries = []

      # Collect from lemas
      site.collections['lemas'].docs.each do |doc|
        entries << {
          "title" => doc.data['title'],
          "url" => doc.url,
          "content" => doc.content,
          "collection" => "lemas"
        }
      end

      # Collect from latinismos
      site.collections['latinismos'].docs.each do |doc|
        entries << {
          "title" => doc.data['title'],
          "url" => doc.url,
          "content" => doc.content,
          "collection" => "latinismos"
        }
      end

      # Write to search.json
      File.open(File.join(site.dest, 'search.json'), 'w') do |f|
        f.write(JSON.pretty_generate(entries))
      end
    end
  end
end
