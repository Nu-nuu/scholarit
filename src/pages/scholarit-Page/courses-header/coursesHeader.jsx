import React from 'react'

export default function coursesHeader() {
  return (
    <div>
    <div className="myCourses_top_Box">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ marginBottom: "30px", color: "white" }}
      >
        {breadcrumbs}
      </Breadcrumbs>

      <Grid container spacing={4}>
        <Grid item xs={7}>
          <div className="myCourses_top_left">
            <div className="myCourses_top_left_text">
              <p className="myCourses_top_header">
                CHARTING AND DATA ANALYSIS
              </p>

              <p className="myCourses_top_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce lacinia gravida ligula, eu eleifend lacus facilisis
                nec. Suspendisse malesuada, velit non pulvinar tincidunt,
                odio enim accumsan mauris, ac tristique mauris felis nec
                leo. (The description of course)
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="flex">
            <img src={Bg} className="myCourses_top_img" />
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
  )
}
