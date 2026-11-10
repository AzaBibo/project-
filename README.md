# UNiK – Big Data Storage and Analysis Platform

## About the Project

**UNiK** is a university group project developed as part of the **Software Engineering course at Handong Global University**.

The project focuses on designing a system that extends the capabilities of the Korean Unification Big Data Center (KUBiC) by integrating **MongoDB, Hadoop Distributed File System (HDFS), and Apache Spark**.

The main goal is to provide users with a centralized platform where they can select existing documents, upload their own files, and perform data analysis using different analytical techniques.

The proposed system aims to improve data storage, scalability, and processing capabilities through distributed storage and parallel data processing.

## Problem Statement

KUBiC stores metadata of research articles and academic papers related to the unification of South Korea and North Korea in a MongoDB database.

However, the existing system lacked middleware connecting its database with distributed storage and big data processing technologies such as Hadoop and Apache Spark.

This limitation made it difficult to expand the platform's storage and data processing capabilities.

**UNiK addresses this challenge by proposing an integration module that connects the existing database with HDFS and Spark.**

## Key Features

The proposed system includes the following functionalities:

- **File Management:** Browse and select existing documents stored in MongoDB.
- **File Upload:** Upload personal documents and files for analysis.
- **Distributed Storage:** Store uploaded and selected files in Hadoop Distributed File System (HDFS).
- **Data Analysis:** Select different analytical techniques and submit analysis requests.
- **Analysis Results:** View analysis results through the user interface.
- **Result Export:** Download analysis results in PDF format.
- **Personal File Management:** View and manage previously uploaded files.
- **Extensibility:** Allow developers and administrators to integrate additional custom Apache Spark jobs.

## System Architecture and Technologies

The proposed architecture is based on the integration of the following technologies:

| Technology | Purpose |
|---|---|
| MongoDB | Existing database containing document metadata |
| Apache Hadoop HDFS | Distributed file storage |
| Apache Spark | Distributed data processing and analysis |
| Apache YARN | Cluster resource management and job scheduling |
| Ubuntu 22.04 | Operating system for Hadoop cluster machines |

### How It Works

The intended workflow is:

1. Users browse and select documents available in the MongoDB database.
2. Users can additionally upload their own documents.
3. Selected and uploaded files are transferred to HDFS.
4. Users choose an available data analysis technique.
5. The controller forwards the analysis request to Apache Spark.
6. Spark processes the selected data and generates results.
7. Users can view and download the analysis results.

## User Interface Prototype

As part of the project, we designed a prototype demonstrating the intended user experience and application workflow.

The prototype consists of five main pages:

1. **Welcome Page** – Introduction to UNiK and navigation to the main functionalities.
2. **All Files in MongoDB** – Browse and select documents available in the database.
3. **Upload Files** – Review selected documents and upload additional files.
4. **Select Analysis Technique** – Choose an available analysis algorithm.
5. **View Analysis Results** – Display analysis results and provide an option to download them.

## Project Scope and Status

This project was developed as an academic Software Engineering project, with a focus on requirements engineering, system design, stakeholder analysis, and prototyping.

The deliverables included:
- Stakeholder and requirement investigation.
- User and system requirement specification.
- Use case modeling.
- User interface storyboard.
- Functional prototype demonstrating the proposed application workflow.
- Requirements validation and prototype evaluation.

**Implementation Note:** The submitted prototype demonstrates the intended user interface and navigation flow using predetermined inputs. It does not implement the complete backend architecture, including the actual MongoDB, HDFS, and Apache Spark integrations. These were part of the proposed system requirements and design.

## What We Learned

Through this project, we gained practical experience with the Software Engineering development process, including:

- Requirements elicitation and specification.
- Stakeholder identification and analysis.
- Functional and non-functional requirements.
- Use case modeling and system design.
- Prototyping and requirements validation.
- Designing a system around distributed storage and big data processing technologies.
- Collaborative software development in a university team.

## Academic Context

**Course:** Software Engineering / Requirement Engineering  
**Institution:** Handong Global University  
**Project:** UNiK – Big Data Storage and Analysis Platform  
**Team:** Group 5

Developed as a collaborative university project.
