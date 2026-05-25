require 'webrick'
Dir.chdir('/Users/sambr-fw/Documents/FWebsite')
server = WEBrick::HTTPServer.new(Port: 3000, DocumentRoot: '/Users/sambr-fw/Documents/FWebsite')
trap('INT') { server.shutdown }
server.start
