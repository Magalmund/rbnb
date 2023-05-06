import React from 'react';
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import FavoritesClient from "@/app/favorites/FavoritesClient";

const ListingPage = async() => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length === 0){
        return (
            <div>
                <ClientOnly>
                    <EmptyState
                        title="No favorites found"
                        subtitle="Looks like you have no favorite listings."
                    />
                </ClientOnly>
            </div>
        );
    }

    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
};

export default ListingPage;
