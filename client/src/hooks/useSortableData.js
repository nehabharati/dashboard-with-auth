import React from "react";

// Hook to help sort data
export default function useSortableData(items, config = null) {
    const [sortConfig, setSortConfig] = React.useState(config);
    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                // Sorting for last updated by taking just the date
                if (sortConfig.key === "first_brewed") {
                    if (
                        a[sortConfig.key].slice(3,) <
                        b[sortConfig.key].slice(3,)
                    ) {
                        return sortConfig.direction === "ascending" ? -1 : 1;
                    }
                    if (
                        a[sortConfig.key].slice(3,) >
                        b[sortConfig.key].slice(3,)
                    ) {
                        return sortConfig.direction === "ascending" ? 1 : -1;
                    }
                    return 0;
                }
                console.log(a[sortConfig.key])

                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = "ascending";
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === "ascending"
        ) {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
}
