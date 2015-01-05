meteor-remote-request
=====================

Example of making a request to a remote server using meteor and ddp.  The
idea behind this example is you have a meteor based application that
needs to send a request to another machine that is behind a firewall.
Since the firewall would block requests from meteor to the machine behind
it, another strategy is needed to send requests or work it.  Fortunately
meteor is built on DDP which allows messages to be sent to connected
clients.  By having the machine behind the firewall connect to the
meteor server over ddp, meteor can push work to it and that is what
this example shows.


meteorServer
-----------
An example of a simple meteor server that lets users submit 
work to a connected nodeClient

nodeClient
----------

An example of a node.js application that connects to a meteor server
over ddp, gets requests, executes them and then sends the result
back to the server.


