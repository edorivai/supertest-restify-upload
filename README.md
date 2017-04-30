Documentation for
https://github.com/visionmedia/supertest/issues/328
https://github.com/restify/node-restify/issues/1054

`npm test` fails in the master branch with the following setup:

```
$ npm list | grep 'super\|mocha\|restify'
├─┬ mocha@2.4.5
├─┬ restify@4.0.4
└─┬ supertest@1.2.0
  └─┬ superagent@1.8.5

$node -v
v5.12.0

$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 16.04.2 LTS
Release:	16.04
Codename:	xenial
```

Test output
```
  0 passing (32ms)
  1 failing

  1) insertImage should send an image:
     TypeError: Cannot read property 'status' of undefined
      at Test._assertStatus (node_modules/supertest/lib/test.js:229:10)
      at Test._assertFunction (node_modules/supertest/lib/test.js:247:11)
      at Test.assert (node_modules/supertest/lib/test.js:148:18)
      at Server.assert (node_modules/supertest/lib/test.js:127:12)
      at emitCloseNT (net.js:1541:8)
      at _combinedTickCallback (internal/process/next_tick.js:71:11)
      at process._tickDomainCallback (internal/process/next_tick.js:122:9)
```
