import React from 'react';
import "../styles/GetInvolvedPage.scss";
import VolunteerOpportunities from '../components/getInvolved/VolunteerOpportunities';
import Events from '../components/getInvolved/Events';
import FundraisingCampaigns from '../components/getInvolved/FundraisingCampaigns';


const GetInvolvedPage = () => {
  return (
    <div className="get-involved-page">
      <VolunteerOpportunities />
      <Events />
      <FundraisingCampaigns />
    </div>
  );
}

export default GetInvolvedPage;
