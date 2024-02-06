'use client';
import { useState } from 'react'
export default function Search() {
    const [count, setCount] = useState(0)
    return (
        <div>
        Search
        <input type="text" />
        </div>
    );
    }