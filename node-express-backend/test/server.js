import {expect} from 'chai';
import { app } from '../src/server.js';
import request from 'request';
import fetch from 'node-fetch';

/**
 * Create a file test/server.js
 * 
 * Create a test for the /api/movies route. The test must check that the route returns a status code of 200.
 */
describe("/api/movies route tester", function() {
    var url = "http://localhost:8001/api/movies";

    it("returns status code 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).equals(200);
            done();
        })
    });
});