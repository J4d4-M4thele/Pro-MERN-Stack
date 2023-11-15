const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');

const GraphQLDate = require('graphql_date.js');
const about = require('about.js');

const url = process.env.DB_URL || 'mongodb+srv://JadaMathele:kPfIAdYSqOfix3ap@testcluster1.wxdgvkq.mongodb.net/issuetracker?retryWrites=true&w=majority';

async function issueList() {
  const issues = await db.collection('issues').find({}).toArray();
  return issues;
}

function issueValidate(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Field "title" must be at least 3 characters long.');
  }
  if (issue.status === 'Assigned' && !issue.owner) {
    errors.push('Field "owner" is required when status is "Assigned"');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function issueAdd(_, { issue }) {
  issueValidate(issue);
  const newIssue = Object.assign({}, issue)
  newIssue.created = new Date();
  newIssue.id = await getNextSequence('issues');

  const result = await db.collection('issues').insertOne(newIssue);
  const savedIssue = await db.collection('issues')
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

const app = express();

const port = process.env.API_SERVER_PORT || 3000;

(async function () {
  try {
    await connectToDb();
    app.listen(port, function () {
      console.log(`API Server started on port: ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
