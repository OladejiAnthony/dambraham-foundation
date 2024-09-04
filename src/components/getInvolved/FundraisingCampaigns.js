import React from 'react';
import "./FundraisingCampaigns.scss";

const FundraisingCampaigns = () => {
  const campaigns = [
    {
      title: 'Support Local Schools',
      goal: '$10,000',
      description: 'Help us raise funds to support educational programs in local schools.',
      donationLink: '/donate-schools',
    },
    {
      title: 'Clean Water Initiative',
      goal: '$15,000',
      description: 'Contribute to our campaign to provide clean drinking water to underserved communities.',
      donationLink: '/donate-water',
    }
  ];

  return (
    <div className="fundraising-campaigns">
      <h2>Fundraising Campaigns</h2>
      {campaigns.map((campaign, index) => (
        <div key={index} className="campaign">
          <h3>{campaign.title}</h3>
          <p><strong>Goal:</strong> {campaign.goal}</p>
          <p>{campaign.description}</p>
          <a href={campaign.donationLink} className="donate-link">Donate Now</a>
        </div>
      ))}
    </div>
  );
}

export default FundraisingCampaigns;

