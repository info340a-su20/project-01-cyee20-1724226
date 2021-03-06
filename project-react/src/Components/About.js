import React, { Component } from "react";
import "../style.css";

class Survey extends Component {
  render() {
    return (
      <div className="intro">
        <h2> About </h2>
        <p>
          Problem Description: The general topic I want to tackle in this
          project is the overflow of information on how to best help homeless
          individuals and other individuals who are need of support resources to
          help them maintain a healthy and sustainable way of life. Currently,
          there are website all around the internet that have websites
          specializing in unique problems in the homeless community. Some
          resource tries to find homeless people jobs, some resources tries to
          find homeless shelters, and some resources tries to find soup
          kitchens, however not one resource that I have found combines all
          these attributes into one website that is easy to understand. For
          example, on the
          <a href="https://www.homelessshelterdirectory.org/">
            homeless shelter directory
          </a>
          , they try to tackle homelessness by listing out homeless shelters for
          people to find in their local state and city. However, the thing the
          cite lacks are other resources like food banks and medical clinics in
          those areas. Another resource that helps individuals who may need
          assistances is
          <a href="https://www.feedingamerica.org/find-your-local-foodbank">
            Feeding America
          </a>
          in their website their goal is finding local food banks for
          individuals, but what they lack are other resources outside to help
          with other needs. As we can see in these resources, the information
          needed to help homeless is not unavailable but more scattered.
          Homeless individual would need to know what to search up and look at
          multiple cites to find pieces of information that they need, instead
          of having one resource with everything they need.
        </p>
        <p>
          Proposed application: The users of the applications are going to be
          predominately homeless individuals with addition to people who need
          additional support in finding essentials to survive. When these users
          go on this website, they will be able to view information on food
          banks, homeless shelters, soup kitchens, etc. The resources that I
          will be using are:
        </p>
        <ul>
          <li>https://www.opendatanetwork.com/search?q=food+banks</li>
          <li>
            https://catalog.data.gov/dataset/directory-of-homeless-drop-in-centers-0786e
          </li>
        </ul>

        <p>A few things users can do on the website are:</p>

        <ol>
          <li>find local food banks</li>
          <li>find local homeless shelters</li>
          <li>find local medical centers</li>
          <li>
            filter different categoreis to find specific information that they
            want
          </li>
        </ol>

        <p>
          By creating this website, I hope this will solve the issue of having
          information scattered everywhere in the internet and allow people to
          find a resource for them that contains all their needs.
        </p>
      </div>
    );
  }
}

export default Survey;
