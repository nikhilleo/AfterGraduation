import React from "react";
import "./Carousel.css";
import COREJAVA from "./CoreJAVA.png";
import ADVANCE from "./AdvanceJAVA.png";
import HIBERNATE from "./Hibernate.png";
import MYSQL from "./MySql.png";
import SPRINGMVC from "./Spring.png";
import WS from "./Web Services.png";
import MICRO from "./MICRO.png";
import Angular from "./Angular.png";
import GIT from "./GITHUB.png";
import JEERA from "./Jira Software@2x-blue.png";
import Carousal from "react-elastic-carousel";

// Core Java

// J2EE

// Hibernate

// MySql

// Spring MVC

// Spring Boot

// Web Services

// Microservices

// Angular

// GITHUB

// JIRA

function Carousel() {
  return (
    <div className="corosul__1" data-aos="fade-up-right" data-aos-offset="300">
      <Carousal enableAutoPlay={true} autoPlaySpeed={5000}>
        <div className="slide">
          <div className="carousel_img">
            <img src={COREJAVA} alt="" />
          </div>
          <div className="carousel_info">
            <h3>Core Java</h3>
            <p>
              Java is a class-based, object-oriented programming language that
              is designed to have as few implementation dependencies as
              possible. It is a general-purpose programming language intended to
              let application developers write once, run anywhere (WORA),
              meaning that compiled Java code can run on all platforms that
              support Java without the need for recompilation.Java applications
              are typically compiled to bytecode that can run on any Java
              virtual machine (JVM) regardless of the underlying computer
              architecture. The syntax of Java is similar to C and C++, but has
              fewer low-level facilities than either of them. The Java runtime
              provides dynamic capabilities (such as reflection and runtime code
              modification) that are typically not available in traditional
              compiled languages. As of 2019, Java was one of the most popular
              programming languages in use according to GitHub,particularly for
              client-server web applications, with a reported 9 million
              developers.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={ADVANCE} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Advance Java</h3>
              It is a part of Java programming language. It is an advanced
              technology or advance version of Java specially designed to
              develop web-based, network-centric or enterprise applications. It
              includes the concepts like Servlet, JSP, JDBC, RMI, Socket
              programming, etc. It is a specialization in specific domain. Most
              of the applications developed using advance Java uses tow-tier
              architecture i.e. Client and Server. All the applications that
              runs on Server can be considered as advance Java applications.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={HIBERNATE} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Hibernate</h3>
              Hibernate ORM (or simply Hibernate) is an object-relational
              mapping tool for the Java programming language. It provides a
              framework for mapping an object-oriented domain model to a
              relational database. Hibernate handles object-relational impedance
              mismatch problems by replacing direct, persistent database
              accesses with high-level object handling functions. Hibernate is
              free software that is distributed under the GNU Lesser General
              Public License 2.1. Hibernate's primary feature is mapping from
              Java classes to database tables, and mapping from Java data types
              to SQL data types. Hibernate also provides data query and
              retrieval facilities. It generates SQL calls and relieves the
              developer from the manual handling and object conversion of the
              result set.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={MYSQL} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>MySQL</h3>A database is a separate application that stores a
              collection of data. Each database has one or more distinct APIs
              for creating, accessing, managing, searching and replicating the
              data it holds.MySQL, the most popular Open Source SQL database
              management system, is developed, distributed, and supported by
              Oracle Corporation.MySQL is a database management system.A
              database is a structured collection of data. It may be anything
              from a simple shopping list to a picture gallery or the vast
              amounts of information in a corporate network. To add, access, and
              process data stored in a computer database, you need a database
              management system such as MySQL Server. Since computers are very
              good at handling large amounts of data, database management
              systems play a central role in computing, as standalone utilities,
              or as parts of other applications.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={SPRINGMVC} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Spring MVC</h3>
              The Spring Web MVC framework provides Model-View-Controller (MVC)
              architecture and ready components that can be used to develop
              flexible and loosely coupled web applications. The MVC pattern
              results in separating the different aspects of the application
              (input logic, business logic, and UI logic), while providing a
              loose coupling between these elements.The Model encapsulates the
              application data and in general they will consist of POJO.The View
              is responsible for rendering the model data and in general it
              generates HTML output that the client's browser can interpret.The
              Controller is responsible for processing user requests and
              building an appropriate model and passes it to the view for
              rendering.
            </p>
          </div>
          c
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img
              src="https://page.code-intelligence.com/hubfs/spring-logo-png-4.png"
              alt=""
            />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Spring Boot</h3>
              Spring Boot is an open source Java-based framework used to create
              a micro Service. It is developed by Pivotal Team and is used to
              build stand-alone and production ready spring applications.Spring
              Boot makes it easy to create stand-alone, production-grade Spring
              based Applications that you can "just run".We take an opinionated
              view of the Spring platform and third-party libraries so you can
              get started with minimum fuss. Most Spring Boot applications need
              minimal Spring configuration.Spring Boot provides a good platform
              for Java developers to develop a stand-alone and production-grade
              spring application that you can just run. You can get started with
              minimum configurations without the need for an entire Spring
              configuration setup.It provides a flexible way to configure Java
              Beans, XML configurations, and Database Transactions.It provides a
              powerful batch processing and manages REST endpoints.In Spring
              Boot, everything is auto configured; no manual configurations are
              needed.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={WS} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Web Services</h3>
              Web Services tutorial is designed for beginners and professionals
              providing basic and advanced concepts of web services such as
              protocols, SOAP, RESTful, java web service implementation, JAX-WS
              and JAX-RS tutorials and examples.Web service is a technology to
              communicate one programming language with another. For example,
              java programming language can interact with PHP and .Net by using
              web services. In other words, web service provides a way to
              achieve interoperability.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={MICRO} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Microservices</h3>
              Microservices - also known as the microservice architecture - is
              an architectural style that structures an application as a
              collection of services that areHighly maintainable and
              testable.Loosely coupled.Independently deployable.Organized around
              business capabilities.Owned by a small team.The microservice
              architecture enables the rapid, frequent and reliable delivery of
              large, complex applications. It also enables an organization to
              evolve its technology stack.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={Angular} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Angular</h3>
              Angular 7 tutorial provides basic and advanced concepts of Angular
              7. Our Angular 7 Tutorial is designed for beginners and
              professionals both.Angular is a JavaScript framework which makes
              you able to create reactive Single Page Applications (SPAs). This
              is a leading front-end development framework which is regularly
              updated by Angular team of Google. Angular 7 is completely based
              on components. It consists of several components forming a tree
              structure with parent and child components. Google Supported
              Community - Google actively supports Angular and its development.
              Angular is used in various Google Apps.POJO based development -
              Angular heavily used Plain Old JavaScript Object and it helps in
              learning Angular in an easier way.Declarative User Interface -
              Angular uses HTML as view language and extends its functionality.
              It helps in handling UI vs code differentiation and UI is loosely
              coupled with code.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={GIT} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>GitHub</h3>
              Centralized version control system (CVCS) uses a central server to
              store all files and enables team collaboration. But the major
              drawback of CVCS is its single point of failure, i.e., failure of
              the central server. Unfortunately, if the central server goes down
              for an hour, then during that hour, no one can collaborate at all.
              And even in a worst case, if the disk of the central server gets
              corrupted and proper backup has not been taken, then you will lose
              the entire history of the project. Here, distributed version
              control system (DVCS) comes into picture.DVCS clients not only
              check out the latest snapshot of the directory but they also fully
              mirror the repository. If the server goes down, then the
              repository from any client can be copied back to the server to
              restore it. Every checkout is a full backup of the repository. Git
              does not rely on the central server and that is why you can
              perform many operations when you are offline. You can commit
              changes, create branches, view logs, and perform other operations
              when you are offline. You require network connection only to
              publish your changes and take the latest changes.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="carousel_img">
            <img src={JEERA} alt="" />
          </div>
          <div className="carousel_info">
            <p>
              <h3>Jira</h3>
              JIRA is a tool developed by Australian Company Atlassian. This
              software is used for bug tracking, issue tracking, and project
              management. The name "JIRA" is actually inherited from the
              Japanese word "Gojira" which means "Godzilla". The basic use of
              this tool is to track issue and bugs related to your software and
              Mobile apps.It is also used for project management. The JIRA
              dashboard consists of many useful functions and features which
              make handling of issues easy. Some of the key features are listed
              below. Let's learn JIRA Defect and Project tracking software with
              this Training Course.
            </p>
          </div>
        </div>
      </Carousal>
    </div>
  );
}

export default Carousel;

{
  /* <div className="slider">
                <div className="slide slide1">
                    <div className="carousel_img">
                        <img src={COREJAVA} alt=""/>
                    </div>
                    <div className="carousel_info">
                        <p>
                        Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,particularly for client-server web applications, with a reported 9 million developers.
                        </p>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="carousel_img">
                        <img src={ADVANCE} alt=""/>
                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide3">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide4">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide5">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide6">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide7">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide8">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide9">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide10">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide11">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide12">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
                <div className="slide slide13">
                    <div className="carousel_img">

                    </div>
                    <div className="carousel_info">
                        
                    </div>
                </div>    
            </div>             */
}
