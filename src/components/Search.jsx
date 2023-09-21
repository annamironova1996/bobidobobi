import React from 'react';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { HomeContext } from '../pages/Home';
import CardSearch from './CardSearch';

const Search = () => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const { cards } = React.useContext(HomeContext);

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 1000),
        []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <section className="search">
            <button
                onClick={() => setOpen(!open)}
                className="search__button"
            >
                <img
                    src="img/icons/search.svg"
                    alt="поиск"
                />
            </button>
            {open && (
                <div className="search__card">
                    <form>
                        <label className="visually-hidden">
                            Поиск по названию
                        </label>
                        <input
                            value={value}
                            onChange={onChangeInput}
                            placeholder="Поиск по названию ..."
                        />
                        <div className="search__card-wrapper">
                            {cards.map((card) => {
                                return card.items
                                    .filter((item) => {
                                        if (
                                            item.title
                                                .toLowerCase()
                                                .includes(
                                                    searchValue.toLowerCase()
                                                )
                                        ) {
                                            return true;
                                        }
                                        return false;
                                    })
                                    .map((item) => {
                                        return (
                                            <CardSearch
                                                key={item.id}
                                                {...item}
                                            />
                                        );
                                    });
                            })}
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
};

export default Search;
