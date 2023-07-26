import React from 'react';

import SiteLayout from '../layouts/SiteLayout';
import ChatContainer from '../components/ChatContainer';
import SearchUserSidebar from '../components/SearchUserSidebar';

function ChatApp() {  
  return (
    <>
      <ChatContainer />

      <SearchUserSidebar />
    </>
  )
}

export default SiteLayout(ChatApp);