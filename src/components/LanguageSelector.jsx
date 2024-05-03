import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'हिन्दी', value: 'hi' },
  { label: 'বাংলা', value: 'bn' },
  { label: 'తెలుగు', value: 'te' },
  { label: 'मराठी', value: 'mr' },
  { label: 'தமிழ்', value: 'ta' },
  { label: 'ગુજરાતી', value: 'gu' },
  { label: 'ಕನ್ನಡ', value: 'kn' },
  { label: 'മലയാളം', value: 'ml' },
  { label: 'ਪੰਜਾਬੀ', value: 'pa' },
];

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="language-selector">
        Google offered in:
      {languageOptions.map(option => (
        <Link
          key={option.value}
          onClick={() => handleLanguageChange(option.value)}
          className={selectedLanguage === option.value ? 'selected' : ''}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}

export default LanguageSelector;
