Documentation for
https://github.com/visionmedia/supertest/issues/328
https://github.com/restify/node-restify/issues/1054

## branch: master (restify v4)
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

## branch: v5 (restify v5)

`npm test` fails in the v5 branch with the following setup:

```
$ npm list | grep 'super\|mocha\|restify'
├─┬ mocha@3.3.0
├─┬ restify@5.0.0-beta-8.0 invalid
│ ├─┬ restify-errors@4.3.0
├─┬ restify-plugins@1.6.0
└─┬ supertest@3.0.0
  └─┬ superagent@3.5.2


$node -v
v7.9.0

$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 16.04.2 LTS
Release:	16.04
Codename:	xenial
```

Test output
```
  0 passing (44ms)
  1 failing

  1) insertImage should send an image:
     TypeError: Cannot read property 'status' of undefined
      at Test._assertStatus (node_modules/supertest/lib/test.js:263:10)
      at Test._assertFunction (node_modules/supertest/lib/test.js:281:11)
      at Test.assert (node_modules/supertest/lib/test.js:171:18)
      at Server.assert (node_modules/supertest/lib/test.js:131:12)
      at emitCloseNT (net.js:1575:8)
      at _combinedTickCallback (internal/process/next_tick.js:77:11)
      at process._tickDomainCallback (internal/process/next_tick.js:128:9)

```
