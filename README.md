# Phone API for NOKIA hackathon

## How to use:

First `npm install` to install all needed packages to run this application.

Add a custom `.env` file to include your own `PORT` by default it will be the `5000`.
Run `npm start` and check the `/phones` endpoint to see the API result.

## Phones JSON

This is the main object with all phones included, there are still some options empty since that information was not on the slides. Up to debate if we keep them empty or just delete it when it's empty to add extra difficulty.

The `picture` key is empty since we still have no picture url.

Some keys that contain larger text with paragraphs, could be added as an array of paragraphs to add an extra complexity where students will need to loop over those paragraphs to display them.
