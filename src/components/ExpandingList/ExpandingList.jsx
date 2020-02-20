import React, { useState, useEffect } from 'react';
import styles from './ExpandingList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function ExpandingList({ data }) {

    const [expandedItems, toggleExpandedItems] = useState([]);

    useEffect(() => {
        toggleExpandedItems(
            data.map((item) => {
                return {
                    id: item.id,
                    expanded: false,
                    key: `${item.desc}-item`,
                };
            })
        );
    }, [data]);

    const nestData = (items, id = null, parent = 'parent') =>
        items.filter(item => item[parent] === id).map(item => ({ ...item, children: nestData(items, item.id) }));

    const nestedData = nestData(data);

    const handleExpandList = (item) => {
        const ogExpandedValue = expandedItems.filter( function(og) {
            return og.id===item.id;
        })[0].expanded;
        const blah = expandedItems.map(listItem => (listItem.id === item.id ? {...listItem, expanded:!ogExpandedValue} : listItem));
        toggleExpandedItems(blah);
    };

    const listItem = (item) => {
        let expandedVar = expandedItems.filter( function(og) { return og.id===item.id; })[0];
        return (
            <li
                key={`${item.id}-li`}
                className={`${styles.expandingListItem} ${(item.children.length > 0) && styles.expandable}`}
            >
                <span onClick={() => handleExpandList(item)}>
                    <img
                        src={item.thumbnail.href}
                        className={styles.expandingListImg}
                        alt={item.thumbnail.description}
                        title={item.thumbnail.description}
                    />
                    {item.name}
                    {(item.children.length > 0 && expandedItems.length > 0 && expandedItems[item.id].expanded) &&
                        <FontAwesomeIcon icon={faCaretDown} className={styles.arrow} />
                    }
                    {(item.children.length > 0 && expandedItems.length > 0 && !expandedItems[item.id].expanded) &&
                        <FontAwesomeIcon icon={faCaretUp} className={styles.arrow} />
                    }
                </span>
                
                {
                    item.children.length > 0 && expandedVar && expandedVar.expanded && (
                        <ul>
                            {item.children.map((child) => {
                                return listItem(child);
                            })}
                        </ul>
                    )
                }
            </li>
        )
    };

    return (
        <ul className={styles.expandingList}>
            { nestedData.length > 0 &&
                nestedData.map((item) => {
                    return listItem(item)
                })
            }
        </ul>
  );
};