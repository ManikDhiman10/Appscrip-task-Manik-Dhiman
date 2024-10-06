"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [sortOption, setSortOption] = useState('RECOMMENDED');

    // State for filter selections
    const [filterSelections, setFilterSelections] = useState({
        customizable: false,
        idealFor: "All",
        occasion: "All",
        work: "All",
        fabric: "All",
        segment: "All",
        suitableFor: "All",
        rawMaterials: "All",
        pattern: "All",
    });

    // Toggle visibility for each filter dropdown
    const [filterToggles, setFilterToggles] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
        rawMaterials: false,
        pattern: false,
    });

    // Fetch products from API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle filter selection changes
    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilterSelections((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle sorting
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Toggle filter dropdowns
    const toggleFilter = (filterName) => {
        setFilterToggles((prev) => ({
            ...prev,
            [filterName]: !prev[filterName],
        }));
    };

    // Get total number of products
    const totalItems = products.length;

    return (
        <div className={styles.productList}>
            <hr />
            <div className={styles.topControls}>
                <button
                    className={styles.toggleFilterBtn}
                    onClick={() => setFiltersVisible(!filtersVisible)}
                >
                    {filtersVisible ? '< HIDE FILTERS' : '> SHOW FILTERS'}
                </button>
                <span className={styles.totalCount}>
                    {totalItems} ITEMS
                </span>
                <select
                    className={styles.sortingDropdown}
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="RECOMMENDED">RECOMMENDED</option>
                    <option value="NEWEST_FIRST">NEWEST FIRST</option>
                    <option value="POPULAR">POPULAR</option>
                    <option value="PRICE_HIGH_TO_LOW">PRICE: HIGH TO LOW</option>
                    <option value="PRICE_LOW_TO_HIGH">PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <hr />
            <div className={`${styles.container} ${filtersVisible ? '' : styles.column}`}>
                <div className={`${styles.filterContainer} ${filtersVisible ? '' : styles.hidden}`}>
                    <div className={styles.filterOption}>
                        <input
                            type="checkbox"
                            id="customizable"
                            name="customizable"
                            checked={filterSelections.customizable}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor="customizable">CUSTOMIZABLE</label>
                    </div>

                    {/* Dropdown filters */}
                    {["idealFor", "occasion", "work", "fabric", "segment", "suitableFor", "rawMaterials", "pattern"].map((filter) => (
                        <div className={styles.filterDropdown} key={filter}>
                            <div
                                className={styles.filterHeader}
                                onClick={() => toggleFilter(filter)}
                            >
                                <label>{filter.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                                {filterToggles[filter] ? '↑' : '↓'}
                            </div>
                            {filterToggles[filter] && (
                                <select
                                    id={filter}
                                    name={filter}
                                    value={filterSelections[filter]}
                                    onChange={handleFilterChange}
                                    className={styles.sortingDropdown}
                                >
                                    {filter === "idealFor" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                            <option value="Kids">Kids</option>
                                        </>
                                    )}
                                    {filter === "occasion" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Casual">Casual</option>
                                            <option value="Formal">Formal</option>
                                            <option value="Party">Party</option>
                                        </>
                                    )}
                                    {filter === "work" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Office">Office</option>
                                            <option value="Home">Home</option>
                                        </>
                                    )}
                                    {filter === "fabric" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Cotton">Cotton</option>
                                            <option value="Wool">Wool</option>
                                            <option value="Silk">Silk</option>
                                        </>
                                    )}
                                    {filter === "segment" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Luxury">Luxury</option>
                                            <option value="Affordable">Affordable</option>
                                        </>
                                    )}
                                    {filter === "suitableFor" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Summer">Summer</option>
                                            <option value="Winter">Winter</option>
                                            <option value="All Seasons">All Seasons</option>
                                        </>
                                    )}
                                    {filter === "rawMaterials" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Organic">Organic</option>
                                            <option value="Synthetic">Synthetic</option>
                                        </>
                                    )}
                                    {filter === "pattern" && (
                                        <>
                                            <option value="All">All</option>
                                            <option value="Plain">Plain</option>
                                            <option value="Printed">Printed</option>
                                            <option value="Striped">Striped</option>
                                        </>
                                    )}
                                </select>
                            )}
                            <hr />
                        </div>
                    ))}
                </div>

                {/* Product Grid */}
                <div className={`${styles.productGrid} ${filtersVisible ? '' : styles.fillSpace}`}>
                    {products.map(product => (
                        <div key={product.id} className={styles.productItem}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
