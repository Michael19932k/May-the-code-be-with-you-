import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    QueryClient,
    QueryClientProvider,
    focusManager,
} from '@tanstack/react-query';
import {
    persistQueryClient,
} from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { AppState } from 'react-native';


focusManager.setEventListener((handleFocus) => {
    const unsubscribe = AppState.addEventListener('change', (state) => {
        handleFocus(state === 'active');
    });
    return unsubscribe.remove;
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 1000 * 60 * 5,
        },
    },
});

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

persistQueryClient({
    queryClient,
    persister: asyncStoragePersister,
});

export const AppQueryProvider = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
