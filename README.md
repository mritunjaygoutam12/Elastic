elasticsearch
==================

Tools for moving and saving indicies.

---

[![Build Status](https://secure.travis-ci.org/taskrabbit/elasticsearch-dump.png?branch=master)](http://travis-ci.org/taskrabbit/elasticsearch-dump)  [![Code Climate](https://codeclimate.com/github/taskrabbit/elasticsearch-dump/badges/gpa.svg)](https://codeclimate.com/github/taskrabbit/elasticsearch-dump)
[![Join the chat at https://gitter.im/taskrabbit/elasticsearch-dump](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/taskrabbit/elasticsearch-dump?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Version!

- Version `6.3.0`  

## Installing


```
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.3.2.tar.gz
```
```
tar -xvf elasticsearch-6.3.2.tar.gz
```
```
cd elasticsearch-6.3.2/bin
```
```
./elasticsearch
```
## Or
https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html

## Testing

 open:  http://localhost:9200/
 Output: 
 ```
 {
  "name" : "_Oxnb4X",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "zT6Mbns6RTOTBolnMSmOqw",
  "version" : {
    "number" : "6.3.0",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "424e937",
    "build_date" : "2018-06-11T23:38:03.357887Z",
    "build_snapshot" : false,
    "lucene_version" : "7.3.1",
    "minimum_wire_compatibility_version" : "5.6.0",
    "minimum_index_compatibility_version" : "5.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## Quick Start
We are using mongosastic for automating our indexing process while create mongodb model
[![Nodei stats](https://nodei.co/npm/mongoosastic.png?downloads=true)](https://npmjs.org/package/elasticdump)

Basic mongoosastic setup while creating db model
```js
const mongoosastic = require('mongoosastic');

const bookSchema = new mongoose.Schema({
  name: { type: String, es_indexed: true },
  description: { type: String, es_indexed: true },
  publisher: { type: String, es_indexed: true },
  publishedDate: { type: Date, es_indexed: true },
  keyword: { type: String, es_indexed: true },
});

bookSchema.plugin(mongoosastic, {
  host: 'localhost',
  port: 9200,
});
```
In case you not need to index all feild
Example
```js
publishedDate: { type: Date, es_indexed: false },
```
Add some book http://localhost:3000/add-book (POST)

Now you can see your indexd data at http://localhost:9200/_search  (GET)

### Search API
For searching we are using default elasticsearch search API

[![Nodei stats](https://nodei.co/npm/elasticsearch.png?downloads=true)](https://npmjs.org/package/elasticdump)

Basic setup in bookservices.js
```js
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});
```
Full text search at http://localhost:9200/matched-book  (POST  {data:"ANY STRING"})
```js
client.search({
    q: string.data,
  }).then((body) => {
    const hits = body.hits.hits;
    resolve(hits);
  }, 
  ```
  Filter based search at http://localhost:9200/filter-book  (POST [
	{ "match": { "description": "fast" } },
	 { "match": { "keyword": "hacker" } }
	])
  ```js
  client.search({
    index: 'bookss',
    type: 'books',
    body: {
      query: {
        bool: {
          must: [
            filterData,
          ],
          filter: [
            // { term: { publisher: '' } },
          ],
        },
      },
    },
  }).then((body) => {
    const hits = body.hits.hits;
    resolve(hits);
    ```

For more https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html
