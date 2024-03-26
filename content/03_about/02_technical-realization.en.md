+++
title = 'Implementation'
date = 2024-01-16T15:26:41Z
draft = false
weight = 2
+++

## Implementation

This website was built and is hosted on AWS. For all regional services, the eu-central-1 region was selected.

![aws_diagramm](/images/general/aws-architecture-diagramm.png)

**Lambda.** We use lambda functions for two activities: 1/ scrape the data. 2/ process and visualize the data. The fictions are either triggered via EventsManager or as part of a StepFunction.

**ECS.** There functions used for data processing and visualization are relying on Python / Pandas. These libraries are too big for being added as zip (lambda limit is 125 MB). We therefore created docker containers for these functions same store them in ECS. We used Cloud9 to build the containers.

**EventManager.** The scraping of the data is happening periodically. As a starting point, we scrape the average water level for the previous days once per day. The current water level is scheduled to be scraped four times per day.

**S3.** All data is stored in S3. A JSON with the current water level and the PNG graphics with the most recent visualizations are stored in a separate S3 bucket. The resulting website pulls the JSON data and the graphics from this bucket.

**Step Functions.** A change in one S3 location can only serve as trigger for one lambda function. As we have to trigger multiple functions, we are working with a scheduled step fiction.

**Route53.** We used Route53 for domain registration.

**Amplify.** The website is built with the HUGO framework. We selected the re-learn theme. The mentioned framework is supported by Amplify out of the box. Not displayed on the diagram is that we are running Hugo in a Cloud9 IDE. The git repository is  handled in CodeCommit.
