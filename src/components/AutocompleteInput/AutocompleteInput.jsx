import { useRef, useEffect } from 'react';

export default function AutocompleteInput ({ value, onChange }) {
  const inputRef = useRef(null);
  const autocomplete = useRef(null);

  useEffect(() => {
    if (!autocomplete.current) {
      autocomplete.current = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.current.addListener('place_changed', () => {
        const place = autocomplete.current.getPlace();
        onChange({ target: { name: 'location', value: place.formatted_address } });
      });
    }

    inputRef.current.value = value;
  }, [value, onChange]);

  
  const handleInput = (e) => {
    onChange({ target: { name: 'location', value: e.target.value } });
  };

  return <input ref={inputRef} type="text" value={value} placeholder="Enter your address" onChange={handleInput} />;
};
