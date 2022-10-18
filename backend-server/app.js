import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

// Function to make a simple API call
const makeApiCall = async (apiURL, apiOptions) => {
  try {
    const options = JSON.parse(apiOptions);
    const response = await fetch(apiURL, options);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

app.all('/', async function(req, res, next) {
  try {
    const resObj=await makeApiCall(req.query.apiURL, req.query.apiOptions);
    if (!resObj) {
      res.status(404).send({'message': 'Failed API server no reachable'});
    } else {
      const content = await resObj.json();
      res.status(resObj.status).send(content);
    }
  } catch (err) {
    res.status(404).send({'message': 'API server not reachable'});
  }
  next();
});

const callApiAndSendResponseToClient = async(url, options, res) => {
    try {
      const response = await fetch(url, options);
      const content = await response.json();
      res.send(content);
    } catch (error) {
      res.send(error)
    }
}

app.get("/read-more", (req, res) => {
    const country = req.query.country;
    const name = req.query.category;
    const page = req.query.page;
    const apiKey = req.query.apiKey;
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=${country}&category=${name}&pageSize=10&page=${page}&apiKey=${apiKey}`);
    const headerParameters = {
        contentType: "application/json",
    };
    const options = {
        method: "GET",
        headers: headerParameters,
    };
    callApiAndSendResponseToClient(url, options, res);
});

app.get("/search", (req, res) => {
    const q = (req.query.q).replace(/-/g, "&");
    const page = req.query.page;
    const apiKey = req.query.apiKey;
    let url = new URL(`https://newsapi.org/v2/everything?q=${q}&pageSize=10&page=${page}&apiKey=${apiKey}`);
    console.log(url)
    const headerParameters = {
        contentType: "application/json",
    };
    const options = {
        method: "GET",
        headers: headerParameters,
    };
    callApiAndSendResponseToClient(url, options, res);
});

app.listen(port);
console.log(`Server started at port: ${port}`);