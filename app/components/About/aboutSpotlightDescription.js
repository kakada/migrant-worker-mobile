import React from 'react';
import { Text } from 'react-native-paper';

import { FontFamily } from '../../assets/stylesheets/base_style';

const AboutSpotlightDescription = () => {
  return (
    <Text variant="regular" style={{lineHeight: 28}}>
      <Text style={{fontFamily: FontFamily.title}}>គំនិតផ្តួចផ្តើម  ស្ពតឡៃត៍ (Spotlight Initiative) </Text>
      គឺ​ជា​កិច្ច​ខិត​ខំប្រឹង​ប្រែង​ជា​សកល​ របស់​អង្គការ​សហ​ប្រជាជាតិ​ និង​ សហភាព​អឺរ៉ុប​ ដើម្បី​បញ្ចប់​រាល់​ទម្រង់​នៃ​អំពើ​ហិង្សា​លើ​ស្រ្តី​ និង​កុមារ។
    </Text>
  )
}

export default AboutSpotlightDescription;