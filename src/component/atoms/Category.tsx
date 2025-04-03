import React from 'react';

type Props = {
    title: string
}

const Category: React.FC<Props> = ({title}) => {
    return <h2>{title}</h2>
}

export default Category;