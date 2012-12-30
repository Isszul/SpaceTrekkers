webdriverjs = require("webdriverjs")
system = require("system")
fs = require("fs")
BufferedWriter = require("buffered-writer")
client = webdriverjs.remote()

#var client = webdriverjs.remote({host: "xx.xx.xx.xx"}); // to run it on a remote webdriver/selenium server
#var client = webdriverjs.remote({desiredCapabilities:{browserName:"chrome"}}); // to run in chrome

client.init().url(system.args[2]).getText("#HTMLReporter", (value) ->
	console.log "===================================="
	console.log "Test Runner : " + system.args[2]
	console.log "------------------------------------"
	console.log value.value
	console.log "===================================="
).end()