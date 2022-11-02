import React, { useState } from "react";
import css from './InputTegForm.module.css'

interface props{
    teg: Array<string>
}


const InputTegForm = ({teg} :props) => {
    const [tags, setTags] = useState<Array<string>>(teg);


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

    );
}

export default InputTegForm