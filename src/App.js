import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { FacebookEmbed, InstagramEmbed, TikTokEmbed, LinkedInEmbed, TwitterEmbed  } from 'react-social-media-embed';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    // Load the SDK Asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div>this is a demo for embedding posts using react-social-media-embed, load times may vary for each post</div>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Facebook" />
          <Tab label="Instagram" />
          <Tab label="TikTok" />
          <Tab label="LinkedIn" />
          <Tab label="Twitter" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <div style={{ display: 'flex', justifyContent: 'center'  }}>
              <FacebookEmbed url="https://www.facebook.com/motid2/videos/840763441082913/" width={350} />
           </div>
           Issues: must get post url from "embed" post 
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/reel/CzqffNltmzp/" width={328} />
        </div>
          Very easy to use, just need a simple link like: https://www.instagram.com/reel/CzqffNltmzp/
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TikTokEmbed url='https://www.tiktok.com/@davidcabreropernas/video/7299668283521764609'width={328} />
        </div>
        <div>link cannot be a short format, must use post ID.</div>
        ex: https://www.tiktok.com/@davidcabreropernas/video/7299668283521764609
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LinkedInEmbed 
            url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7125818664758501377"
            postUrl="https://www.linkedin.com/posts/omer-shani_lgbtq-israel-gaza-ugcPost-7125818664758501377-L-sV/"
            width={400}
            height={570} 
          /> 
        </div>
        <div>unlike what the documentation says, the embed url can be constructed from the post url</div>
        <div>postURL: https://www.linkedin.com/posts/omer-shani_lgbtq-israel-gaza-<b>ugcPost:7125818664758501377</b>-L-sV/</div>
        embedURL:https://www.linkedin.com/embed/feed/update/urn:li:<b>ugcPost:7125818664758501377</b>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TwitterEmbed url="https://twitter.com/HamasIsis/status/1724198206974644533" width={325} />
        </div>
        <div>The URL must contain the tweet ID, in the format</div>
        https://twitter.com/username/status/1234567890123456789
        </TabPanel>
      </Box>
    </div>
  );
}

export default App;
