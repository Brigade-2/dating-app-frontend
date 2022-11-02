import React, { useState } from "react";
import css from "./InputTeg.module.css";

interface props{
    setFilter: (tags: Array<string>, city: string) => void
}

const InputTeg = ({setFilter}:props) => {
    const [tags, setTags] = useState<Array<string>>([]);
    const [city, setCity] = useState('')

    const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if ((e.target as HTMLInputElement).value.length > 0) {
                setTags([...tags, (e.target as HTMLInputElement).value]);
                (e.target as HTMLInputElement).value = "";
            }
        }
    };
    const removeTag = (removedTag :string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    return (
        <div className={css.filterContainer}>
            <h3>Interesting user</h3>
            <div className={css.tag_container}>
                {tags.map((tag, index) => {
                    return (
                        <div key={index} className={css.tag}>
                            {tag} <span onClick={() => removeTag(tag)}>x</span>
                        </div>
                    );
                })}
                <input onKeyDown={addTag} />
            </div>

            <h3>City</h3>
            <input value={city} onChange={e => setCity(e.target.value)}/>
            <button className={css.FilterButton} onClick={() => setFilter(tags, city)}>Найти</button>
        </div>
    );
}

export default InputTeg