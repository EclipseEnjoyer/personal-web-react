import React from 'react';
import PropTypes from 'prop-types';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/icons';

const Icon = ({ name } : { name: string}) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon />;
    case 'Linkedin':
      return <LinkedInIcon />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;