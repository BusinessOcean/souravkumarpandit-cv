import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import clientconfig from './config/clientconfig'

const builder = imageUrlBuilder(clientconfig)

function urlFor(source: any) {
    return builder.image(source)
}

export { urlFor }