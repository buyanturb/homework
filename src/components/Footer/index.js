import React from 'react';
import Box from './Box';

const Footer = () =>
{
    return (
		<div className="h-[438px] flex items-center" style={{ backgroundColor: '#F5F7F6', position: 'relative' }}>
      <Box />
      <span>All content Copyright © 2020 GOBI Cashmere</span>
    </div>
	)
}

export default Footer;