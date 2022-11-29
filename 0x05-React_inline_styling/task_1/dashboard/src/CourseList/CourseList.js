import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite'




const CourseList = ({listCourses}) => {
    const styles = StyleSheet.create(
      {
          mg: {
            margin: '3rem auto'
          },
          mw: {
            maxWidth: '90vw'
          },
          wd: {
            width: '100%'
          },
          textCenter: {
            
              textAlign: 'center'
          },
          textLeft: {
            textAlign: 'left'
          },
          br: {
            border: 'thin solid #ccc'
          },
          mh: {
            minHeight: '45vh'
          },
          brCollapse: {
            borderCollapse: 'collapse'
          }
      }
    )
    return (
        <table className={css(styles.mg, styles.mw, styles.wd, styles.brCollapse)}>
            <thead className={css(styles.br)}>
                <CourseListRow className={css(styles.textCenter, styles.br)} textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow className={css(styles.br)} textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody className={css(styles.br)}>
            {listCourses.length === 0 ? (
            <tr>
              <td className={styles.textLeft}>No course available yet</td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
}
export default CourseList;