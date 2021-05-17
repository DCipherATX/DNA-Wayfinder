var tree = "JSONtrees/familyVisaApp.json";
var levels = 9;
treeHeight = 1000;


function fillModal(id) {
  switch(id) {
    case "popupApplication":
     $("#modalTitle").text("Initiating the Application Process");
     $("#modalBody").html(`<p>Individuals seeking a family-based visa should work closely with their U.S. based family members to complete the DNA testing process. U.S. based family members are required to start the DNA collection process, the process cannot be initiated by individuals abroad. For more information on the role of U.S. based family members, click <a href="./familyVisaPet.html">here</a>.</p> <br>
     <p> Please note that DNA collection and testing is only a portion of the application process for family-based visas. Evidence of a confirmed relationship does not guarantee issuance of a visa. For more information on the entire application process, click <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration.html" target="_blank"> here</a>.</p>
     `);
      break;
    case "popupEmbassy":
      $("#modalTitle").text("U.S. Embassy and Consulate");
     $("#modalBody").html(`<p>DNA collection should occur at the U.S. Embassy or Consulate where the visa application is pending. Find the nearest U.S. Embassy or Consulate <a href= "https://www.usembassy.gov/" target = "_blank">here</a>.</p>
     `);
      break;
    case "popupFees":
      $("#modalTitle").text("Fees");
      $("#modalBody").html(`<p> To schedule an appointment, you should contact the Embassy or Consulate's panel physician. Routine medical examinations, conducted by panel physicians, are mandatory for all visa applicants (<a href="https://www.law.cornell.edu/cfr/text/22/42.66">22 CFR § 42.66</a>) and the Consulate or Embassy should provide you with a list of approved doctors. You may be required to pay a DNA collection fee.</p>
      `);
      break;
    case "popupCollection":
      $("#modalTitle").text("Sample Collection Process (Abroad)");
      $("#modalBody").html(`<p>In order to have a DNA sample collected abroad, it is important to make sure that applicants come prepared to their scheduled collection appointment. Applicants must bring with them the following records:</p>
      <ul>
      <li>Their passport</li>
      <li>A photo of themselves</li>
      <li>A receipt showing payment of fees associated with DNA collection</li>
      </ul>
      <p>A designated physician and/or medical technician will collect the sample and securely send it back to the AABB lab in the United States.<br><br>
      If an applicant is a child, they must be accompanied by a parent or legal guardian. If neither parent is present, the guardian must present a Power of Attorney document from the parent residing in the United States.
       </p>
      `);
      break;
      case "popupNeg":
        $("#modalTitle").text("What happens after negative test result?");
        $("#modalBody").html(`<p> A negative test result will likely warrant rejection of your visa application.</p><br> <p> You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing. Visa application rejects are generally not appealable, but you may be able to seek review from the Board of Immigration Appeals if you believe that the decision was made in error based on inaccurate DNA test results.</p>
        `);
        break;
      case "popupPos":
        $("#modalTitle").text("What next after a positive test result?");
        $("#modalBody").html(`<p> The application process continues. However, a positive test result <b> does not </b> guarantee that a visa will be granted.</p><br> <p>You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing. </p>
        `);
        break;
    case "popup5":
      $("#modalTitle").text("Family Member Resources");
      $("#modalBody").html(`<p><a href="https://www.law.cornell.edu/uscode/text/8/1325" target="_blank">§1325</a> | Improper Entry, civil offense &amp; misdemeanor</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1326" target="_blank">§1326</a> | Reentry of removed aliens; aggravated felony</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1357" target="_blank">§1357</a> | Immigration Powers: Immigration authorities have broad power to search persons and
      property</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1182" target="_blank">§1182</a> | Conditions for inadmissibility</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1225" target="_blank">§1225</a> | Inspection by immigration officers; expedited removal of inadmissible arriving aliens;
      referral for hearing</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1227" target="_blank">§1227</a> | Classes of deportable aliens</p>
       <a href="https://www.law.cornell.edu/uscode/text/8/1229" target="_blank">8 USC §1229</a> | Initiation of removal proceedings</p>`);
      break;
    case "popupDNA":
        $("#modalTitle").text("DNA samples");
        $("#modalBody").html(`<p> A DNA sample is generally collected via buccal swab - taking saliva from the mouth. Blood draws may also be approved in certain situations. 28 CFR 28.12(f)(1) </p>
        `);
        break;
    case "popupProfile":
          $("#modalTitle").text("DNA Profile");
          $("#modalBody").html(`<p> A DNA profile identifies a handful of specific genetic markers from your DNA. These markers can be compared to markers in the same location in other DNA profiles to determine if a genetic match exist between the two. </p> <br> <p> For those who cross the border without paperwork, [how to explain...] </p>
          `);
          break;
    case "popupCircumstances":
          $("#modalTitle").text("Optional DNA testing");
          $("#modalBody").html(`<p> DNA testing is entirely optional. Under no circumstances can the government <i>require</i> you to provide a DNA sample in order to receive a family based visa.</p> <br> <p> However, if you are otherwise unable to provide credible evidence of your relationship, you may have no choice but to withdraw your appliation or submit to DNA testing. </p>
          `);
          break;
    default:
      alert("Something went wrong!");
      break;
  }
}