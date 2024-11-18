import React, { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';

const CountryStateCity = ({ Location, setLocation }) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setStates(State.getStatesOfCountry(country.isoCode));
        setCities([]); // Clear cities when country changes
        setSelectedState(null);
        setLocation((prev) =>
        ({
            ...prev,
            country: country.name,
            state: '',
            city: ''
        }));
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
        setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
        setLocation((prev) => ({
            ...prev,
            state: state.name,
            city: ''
        }));
    };

    const handleCityChange = (city) => {
        setLocation((prev) => ({
            ...prev,
            city: city.name,
        }));
    };

    return (
        <div>
            {/* Country Dropdown */}
            <div>
                <select
                    className='w-64 p-1 rounded-lg'
                    onChange={(e) =>
                        handleCountryChange(
                            countries.find((c) => c.isoCode === e.target.value)
                        )
                    }
                >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* State Dropdown */}
            {selectedCountry && (
                <div className='mt-2'>
                    <select
                        className='w-64 p-2 rounded-lg'
                        onChange={(e) =>
                            handleStateChange(
                                states.find((s) => s.isoCode === e.target.value)
                            )
                        }
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* City Dropdown */}
            {selectedState && (
                <div className='mt-2'>
                    <select
                        className='w-64 p-2 rounded-lg'
                        onChange={(e) =>
                            handleCityChange(
                                cities.find((city) => city.name === e.target.value)
                            )
                        }
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default CountryStateCity;
