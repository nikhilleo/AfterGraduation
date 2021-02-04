import React from "react";
import "./Carousel.css";
import COREJAVA from "./CoreJAVA.png";
import ADVANCE from "./AdvanceJAVA.png";
import HIBERNATE from "./Hibernate.png";
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
