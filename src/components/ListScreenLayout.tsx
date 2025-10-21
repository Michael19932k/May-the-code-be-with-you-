import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListScreenLayoutProps } from '../types/layout';

export default function ListScreenLayout({
    title,
    subtitle,
    isLoading,
    isError,
    emptyText,
    children,
}: ListScreenLayoutProps) {
    const showContent = !isLoading && !isError;

    const isVirtualizedList =
        React.isValidElement(children) &&
        ['FlatList', 'SectionList', 'VirtualizedList'].includes(
            (children.type as any)?.displayName ||
            (children.type as any)?.name ||
            ''
        );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {title && <Text style={styles.title}>{title}</Text>}
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

                {isLoading && <ActivityIndicator style={styles.loading} size="large" />}

                {isError && !isLoading && (
                    <Text style={styles.error}>Something went wrong.</Text>
                )}

                {showContent &&
                    (isVirtualizedList ? (
                        <View style={styles.flexContainer}>{children}</View>
                    ) : (
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            {children}
                            {emptyText ? (
                                <Text style={styles.empty}>{emptyText}</Text>
                            ) : null}
                        </ScrollView>
                    ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    flexContainer: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    loading: {
        marginTop: 20,
    },
    error: {
        color: '#D32F2F',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    empty: {
        textAlign: 'center',
        color: '#888',
        marginTop: 16,
        fontSize: 16,
    },
});
