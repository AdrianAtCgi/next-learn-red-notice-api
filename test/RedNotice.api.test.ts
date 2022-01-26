import {createSearchAllQueryUrl, createSearchQueryUrl, RedNoticeQuery, searchRedNotice, detailsRedNotice} from "../src/lib/RedNotice.all"


describe("Testing createSearchAllQueryUrl", () => {
    it("createSearchAllQueryUrl should return a string which queries page=1 and resultPerPage=5", async () => {
        expect.assertions(1);
        const URL = createSearchAllQueryUrl();
        expect(URL).toEqual("https://ws-public.interpol.int/notices/v1/red?page=1&resultPerPage=5")
    })
})

describe("Testing createSearchQueryUrl, happy path", () => {
    it("createSearchAllQueryUrl should return a string with correct query arguments", async () => {
        expect.assertions(1);
        const query : RedNoticeQuery = {
            page:1,
            resultPerPage:2,
            forename: "peter",
            arrestWarrantCountryId: undefined,        
        }
        const URL = createSearchQueryUrl(query);        
        expect(URL).toEqual("https://ws-public.interpol.int/notices/v1/red?page=1&resultPerPage=2&forename=peter")
    })
})

describe("Testing searchRedNotice, no query as argument,  happy path", () => {
    it("searchRedNotice should by default return an array with 5 RedNotice", async () => {
        expect.assertions(2);
        const query = { page: 1, resultPerPage: 5 }
        const res = await searchRedNotice();  
        console.log(res) 
        expect(res._embedded.notices.length).toEqual(5);
        expect(res.query).toEqual(query);
    })
})

describe("Testing detailsRedNotice ", () => {
    it("searchRedNotice should by default return an array with 5 RedNotice", async () => {
        expect.assertions(2);
        const query = { page: 1, resultPerPage: 5 }
        const res = await searchRedNotice();  
        console.log(res) 
        expect(res._embedded.notices.length).toEqual(5);
        expect(res.query).toEqual(query);
    })
})