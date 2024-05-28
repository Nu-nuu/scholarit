import React from 'react'
import './latestActivity.scss'

const LatestActivity = () => {
    return (
        <div>
            <div className="activities">
                <ul>
                    {[ 7, 8, 9].map((value) => (
                        <li key={value}>
                            <div>
                                <p>{`Chapter ${value}`}</p>
                                <time>{`Time ${value}`}</time>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
            <hr />
        </div>
    )
}

export default LatestActivity