import { Link } from 'gatsby'
import React from 'react'
import { removeLeadingSlash } from '../utils'

type PreviousNextProps = {
    sectionUrl: string,
    previous: {
        title: string,
        slug: string
    } | null,
    next: {
        title: string,
        slug: string
    } | null
}

const PreviousNext = ({ sectionUrl, previous, next }: PreviousNextProps) => {

    const previousLink = previous ? `${sectionUrl}/${removeLeadingSlash(previous.slug)}` : '';
    const nextLink = next ? `/revistavamos/${removeLeadingSlash(next.slug)}` : '';

    if (previous || next) {
        return (
            <ul>
                {previous && (
                    <li>
                        <Link to={previousLink} rel='prev'>
                            ← {previous.title}
                        </Link>
                    </li>
                )}
                {next && (
                    <li>
                        <Link to={nextLink} rel='next'>
                            {next.title} →
                        </Link>
                    </li>
                )}
            </ul>
        )
    }

    return null;
}

export default PreviousNext