import styled from 'styled-components'

const size = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
}

const StyledCol = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  box-sizing: border-box;

  &.bk-col-24 {
    display: block;
    flex: 0 0 100%;
    max-width: 100%;
  }

  &.bk-col-23 {
    display: block;
    flex: 0 0 95.83333333333334%;
    max-width: 95.83333333333334%;
  }

  &.bk-col-22 {
    display: block;
    flex: 0 0 91.66666666666666%;
    max-width: 91.66666666666666%;
  }

  &.bk-col-21 {
    display: block;
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  &.bk-col-20 {
    display: block;
    flex: 0 0 83.33333333333334%;
    max-width: 83.33333333333334%;
  }

  &.bk-col-19 {
    display: block;
    flex: 0 0 79.16666666666666%;
    max-width: 79.16666666666666%;
  }

  &.bk-col-18 {
    display: block;
    flex: 0 0 75%;
    max-width: 75%;
  }

  &.bk-col-17 {
    display: block;
    flex: 0 0 70.83333333333334%;
    max-width: 70.83333333333334%;
  }

  &.bk-col-16 {
    display: block;
    flex: 0 0 66.66666666666666%;
    max-width: 66.66666666666666%;
  }

  &.bk-col-15 {
    display: block;
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  &.bk-col-14 {
    display: block;
    flex: 0 0 58.333333333333336%;
    max-width: 58.333333333333336%;
  }

  &.bk-col-13 {
    display: block;
    flex: 0 0 54.166666666666664%;
    max-width: 54.166666666666664%;
  }

  &.bk-col-12 {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
  }

  &.bk-col-11 {
    display: block;
    flex: 0 0 45.83333333333333%;
    max-width: 45.83333333333333%;
  }

  &.bk-col-10 {
    display: block;
    flex: 0 0 41.66666666666667%;
    max-width: 41.66666666666667%;
  }

  &.bk-col-9 {
    display: block;
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  &.bk-col-8 {
    display: block;
    flex: 0 0 33.33333333333333%;
    max-width: 33.33333333333333%;
  }

  &.bk-col-7 {
    display: block;
    flex: 0 0 29.166666666666668%;
    max-width: 29.166666666666668%;
  }

  &.bk-col-6 {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
  }

  &.bk-col-5 {
    display: block;
    flex: 0 0 20.833333333333336%;
    max-width: 20.833333333333336%;
  }

  &.bk-col-4 {
    display: block;
    flex: 0 0 16.666666666666664%;
    max-width: 16.666666666666664%;
  }

  &.bk-col-3 {
    display: block;
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  &.bk-col-2 {
    display: block;
    flex: 0 0 8.333333333333332%;
    max-width: 8.333333333333332%;
  }

  &.bk-col-1 {
    display: block;
    flex: 0 0 4.166666666666666%;
    max-width: 4.166666666666666%;
  }

  /* Offset */
  &.bk-col-offset-24 {
    margin-inline-start: 100%;
  }

  &.bk-col-offset-23 {
    margin-inline-start: 95.83333333333334%;
  }

  &.bk-col-offset-22 {
    margin-inline-start: 91.66666666666666%;
  }

  &.bk-col-offset-21 {
    margin-inline-start: 87.5%;
  }

  &.bk-col-offset-20 {
    margin-inline-start: 83.33333333333334%;
  }

  &.bk-col-offset-19 {
    margin-inline-start: 79.16666666666666%;
  }

  &.bk-col-offset-18 {
    margin-inline-start: 75%;
  }

  &.bk-col-offset-17 {
    margin-inline-start: 70.83333333333334%;
  }

  &.bk-col-offset-16 {
    margin-inline-start: 66.66666666666666%;
  }

  &.bk-col-offset-15 {
    margin-inline-start: 62.5%;
  }

  &.bk-col-offset-14 {
    margin-inline-start: 58.333333333 0.333336%;
  }

  &.bk-col-offset-13 {
    margin-inline-start: 54.166666666666664%;
  }

  &.bk-col-offset-12 {
    margin-inline-start: 50%;
  }

  &.bk-col-offset-11 {
    margin-inline-start: 45.83333333333333%;
  }

  &.bk-col-offset-10 {
    margin-inline-start: 41.66666666666667%;
  }

  &.bk-col-offset-9 {
    margin-inline-start: 37.5%;
  }

  &.bk-col-offset-8 {
    margin-inline-start: 33.33333333333333%;
  }

  &.bk-col-offset-7 {
    margin-inline-start: 29.166666666666668%;
  }

  &.bk-col-offset-6 {
    margin-inline-start: 25%;
  }

  &.bk-col-offset-5 {
    margin-inline-start: 20.833333333333336%;
  }

  &.bk-col-offset-4 {
    margin-inline-start: 16.666666666666664%;
  }

  &.bk-col-offset-3 {
    margin-inline-start: 12.5%;
  }

  &.bk-col-offset-2 {
    margin-inline-start: 8.333333333333332%;
  }

  &.bk-col-offset-1 {
    margin-inline-start: 4.166666666666666%;
  }

  /* Push */
  &.bk-col-push-1 {
    inset-inline-start: 4.166666666666666%;
  }

  &.bk-col-push-2 {
    inset-inline-start: 8.333333333333332%;
  }

  &.bk-col-push-3 {
    inset-inline-start: 12.5%;
  }

  &.bk-col-push-4 {
    inset-inline-start: 16.666666666666664%;
  }

  &.bk-col-push-5 {
    inset-inline-start: 20.833333333333336%;
  }

  &.bk-col-push-6 {
    inset-inline-start: 25%;
  }

  &.bk-col-push-7 {
    inset-inline-start: 29.166666666666668%;
  }

  &.bk-col-push-8 {
    inset-inline-start: 33.33333333333333%;
  }

  &.bk-col-push-9 {
    inset-inline-start: 37.5%;
  }

  &.bk-col-push-10 {
    inset-inline-start: 41.66666666666667%;
  }

  &.bk-col-push-11 {
    inset-inline-start: 45.83333333333333%;
  }

  &.bk-col-push-12 {
    inset-inline-start: 50%;
  }

  &.bk-col-push-13 {
    inset-inline-start: 54.166666666666664%;
  }

  &.bk-col-push-14 {
    inset-inline-start: 58.333333333333336%;
  }

  &.bk-col-push-15 {
    inset-inline-start: 62.5%;
  }

  &.bk-col-push-16 {
    inset-inline-start: 66.66666666666666%;
  }

  &.bk-col-push-17 {
    inset-inline-start: 70.83333333333334%;
  }

  &.bk-col-push-18 {
    inset-inline-start: 75%;
  }

  &.bk-col-push-19 {
    inset-inline-start: 79.16666666666666%;
  }

  &.bk-col-push-20 {
    inset-inline-start: 83.33333333333334%;
  }

  &.bk-col-push-21 {
    inset-inline-start: 87.5%;
  }

  &.bk-col-push-22 {
    inset-inline-start: 91.66666666666666%;
  }

  &.bk-col-push-23 {
    inset-inline-start: 95.83333333333334%;
  }

  &.bk-col-push-24 {
    inset-inline-start: 100%;
  }

  /* Pull */
  &.bk-col-pull-1 {
    inset-inline-end: 4.166666666666666%;
  }

  &.bk-col-pull-2 {
    inset-inline-end: 8.333333333333332%;
  }

  &.bk-col-pull-3 {
    inset-inline-end: 12.5%;
  }

  &.bk-col-pull-4 {
    inset-inline-end: 16.666666666666664%;
  }

  &.bk-col-pull-5 {
    inset-inline-end: 20.833333333333336%;
  }

  &.bk-col-pull-6 {
    inset-inline-end: 25%;
  }

  &.bk-col-pull-7 {
    inset-inline-end: 29.166666666666668%;
  }

  &.bk-col-pull-8 {
    inset-inline-end: 33.33333333333333%;
  }

  &.bk-col-pull-9 {
    inset-inline-end: 37.5%;
  }

  &.bk-col-pull-10 {
    inset-inline-end: 41.66666666666667%;
  }

  &.bk-col-pull-11 {
    inset-inline-end: 45.83333333333333%;
  }

  &.bk-col-pull-12 {
    inset-inline-end: 50%;
  }

  &.bk-col-pull-13 {
    inset-inline-end: 54.166666666666664%;
  }

  &.bk-col-pull-14 {
    inset-inline-end: 58.333333333333336%;
  }

  &.bk-col-pull-15 {
    inset-inline-end: 62.5%;
  }

  &.bk-col-pull-16 {
    inset-inline-end: 66.66666666666666%;
  }

  &.bk-col-pull-17 {
    inset-inline-end: 70.83333333333334%;
  }

  &.bk-col-pull-18 {
    inset-inline-end: 75%;
  }

  &.bk-col-pull-19 {
    inset-inline-end: 79.16666666666666%;
  }

  &.bk-col-pull-20 {
    inset-inline-end: 83.333333333 33334%;
  }

  &.bk-col-pull-21 {
    inset-inline-end: 87.5%;
  }

  &.bk-col-pull-22 {
    inset-inline-end: 91.66666666666666%;
  }

  &.bk-col-pull-23 {
    inset-inline-end: 95.83333333333334%;
  }

  &.bk-col-pull-24 {
    inset-inline-end: 100%;
  }
  @media ${device.xs} {
    &.bk-col-xs {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-xs-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-xs-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-xs-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-xs-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-xs-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-xs-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-xs-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-xs-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-xs-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-xs-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-xs-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-xs-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-xs-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-xs-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-xs-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-xs-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-xs-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-xs-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-xs-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-xs-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-xs-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-xs-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-xs-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-xs-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-xs-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-xs-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-xs-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-xs-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-xs-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-xs-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-xs-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-xs-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-xs-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-xs-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-xs-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-xs-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-xs-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-xs-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-xs-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-xs-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-xs-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-xs-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-xs-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-xs-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-xs-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-xs-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-xs-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-xs-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-xs-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-xs-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-xs-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-xs-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-xs-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-xs-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-xs-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-xs-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-xs-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-xs-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-xs-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-xs-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-xs-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-xs-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-xs-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-xs-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-xs-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-xs-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-xs-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-xs-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-xs-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-xs-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-xs-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-xs-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-xs-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-xs-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-xs-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-xs-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-xs-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-xs-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-xs-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-xs-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-xs-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-xs-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-xs-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-xs-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-xs-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-xs-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-xs-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-xs-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-xs-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-xs-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-xs-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-xs-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-xs-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-xs-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-xs-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-xs-pull-24 {
      inset-inline-end: 100%;
    }
  }
  @media ${device.sm} {
    &.bk-col-sm {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-sm-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-sm-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-sm-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-sm-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-sm-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-sm-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-sm-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-sm-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-sm-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-sm-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-sm-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-sm-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-sm-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-sm-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-sm-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-sm-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-sm-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-sm-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-sm-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-sm-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-sm-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-sm-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-sm-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-sm-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-sm-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-sm-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-sm-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-sm-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-sm-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-sm-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-sm-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-sm-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-sm-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-sm-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-sm-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-sm-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-sm-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-sm-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-sm-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-sm-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-sm-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-sm-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-sm-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-sm-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-sm-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-sm-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-sm-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-sm-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-sm-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-sm-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-sm-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-sm-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-sm-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-sm-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-sm-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-sm-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-sm-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-sm-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-sm-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-sm-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-sm-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-sm-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-sm-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-sm-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-sm-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-sm-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-sm-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-sm-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-sm-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-sm-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-sm-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-sm-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-sm-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-sm-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-sm-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-sm-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-sm-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-sm-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-sm-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-sm-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-sm-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-sm-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-sm-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-sm-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-sm-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-sm-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-sm-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-sm-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-sm-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-sm-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-sm-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-sm-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-sm-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-sm-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-sm-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-sm-pull-24 {
      inset-inline-end: 100%;
    }
  }
  @media ${device.md} {
    &.bk-col-md {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-md-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-md-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-md-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-md-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-md-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-md-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-md-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-md-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-md-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-md-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-md-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-md-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-md-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-md-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-md-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-md-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-md-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-md-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-md-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-md-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-md-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-md-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-md-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-md-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-md-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-md-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-md-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-md-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-md-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-md-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-md-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-md-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-md-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-md-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-md-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-md-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-md-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-md-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-md-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-md-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-md-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-md-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-md-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-md-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-md-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-md-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-md-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-md-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-md-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-md-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-md-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-md-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-md-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-md-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-md-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-md-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-md-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-md-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-md-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-md-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-md-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-md-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-md-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-md-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-md-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-md-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-md-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-md-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-md-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-md-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-md-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-md-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-md-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-md-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-md-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-md-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-md-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-md-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-md-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-md-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-md-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-md-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-md-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-md-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-md-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-md-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-md-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-md-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-md-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-md-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-md-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-md-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-md-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-md-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-md-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-md-pull-24 {
      inset-inline-end: 100%;
    }
  }
  @media ${device.lg} {
    &.bk-col-lg {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-lg-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-lg-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-lg-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-lg-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-lg-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-lg-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-lg-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-lg-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-lg-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-lg-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-lg-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-lg-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-lg-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-lg-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-lg-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-lg-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-lg-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-lg-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-lg-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-lg-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-lg-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-lg-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-lg-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-lg-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-lg-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-lg-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-lg-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-lg-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-lg-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-lg-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-lg-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-lg-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-lg-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-lg-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-lg-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-lg-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-lg-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-lg-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-lg-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-lg-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-lg-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-lg-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-lg-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-lg-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-lg-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-lg-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-lg-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-lg-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-lg-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-lg-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-lg-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-lg-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-lg-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-lg-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-lg-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-lg-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-lg-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-lg-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-lg-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-lg-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-lg-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-lg-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-lg-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-lg-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-lg-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-lg-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-lg-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-lg-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-lg-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-lg-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-lg-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-lg-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-lg-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-lg-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-lg-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-lg-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-lg-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-lg-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-lg-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-lg-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-lg-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-lg-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-lg-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-lg-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-lg-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-lg-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-lg-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-lg-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-lg-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-lg-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-lg-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-lg-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-lg-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-lg-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-lg-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-lg-pull-24 {
      inset-inline-end: 100%;
    }
  }
  @media ${device.xl} {
    &.bk-col-xl {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-xl-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-xl-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-xl-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-xl-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-xl-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-xl-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-xl-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-xl-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-xl-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-xl-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-xl-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-xl-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-xl-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-xl-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-xl-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-xl-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-xl-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-xl-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-xl-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-xl-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-xl-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-xl-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-xl-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-xl-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-xl-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-xl-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-xl-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-xl-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-xl-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-xl-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-xl-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-xl-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-xl-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-xl-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-xl-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-xl-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-xl-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-xl-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-xl-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-xl-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-xl-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-xl-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-xl-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-xl-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-xl-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-xl-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-xl-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-xl-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-xl-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-xl-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-xl-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-xl-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-xl-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-xl-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-xl-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-xl-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-xl-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-xl-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-xl-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-xl-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-xl-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-xl-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-xl-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-xl-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-xl-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-xl-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-xl-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-xl-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-xl-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-xl-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-xl-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-xl-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-xl-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-xl-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-xl-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-xl-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-xl-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-xl-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-xl-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-xl-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-xl-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-xl-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-xl-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-xl-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-xl-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-xl-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-xl-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-xl-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-xl-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-xl-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-xl-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-xl-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-xl-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-xl-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-xl-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-xl-pull-24 {
      inset-inline-end: 100%;
    }
  }
  @media ${device.xxl} {
    &.bk-col-xxl {
      padding: 16px 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      text-align: center;
      border-radius: 0;
      box-sizing: border-box;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 14px;
    }

    &.bk-col-xxl-24 {
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.bk-col-xxl-23 {
      display: block;
      flex: 0 0 95.83333333333334%;
      max-width: 95.83333333333334%;
    }

    &.bk-col-xxl-22 {
      display: block;
      flex: 0 0 91.66666666666666%;
      max-width: 91.66666666666666%;
    }

    &.bk-col-xxl-21 {
      display: block;
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }

    &.bk-col-xxl-20 {
      display: block;
      flex: 0 0 83.33333333333334%;
      max-width: 83.33333333333334%;
    }

    &.bk-col-xxl-19 {
      display: block;
      flex: 0 0 79.16666666666666%;
      max-width: 79.16666666666666%;
    }

    &.bk-col-xxl-18 {
      display: block;
      flex: 0 0 75%;
      max-width: 75%;
    }

    &.bk-col-xxl-17 {
      display: block;
      flex: 0 0 70.83333333333334%;
      max-width: 70.83333333333334%;
    }

    &.bk-col-xxl-16 {
      display: block;
      flex: 0 0 66.66666666666666%;
      max-width: 66.66666666666666%;
    }

    &.bk-col-xxl-15 {
      display: block;
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }

    &.bk-col-xxl-14 {
      display: block;
      flex: 0 0 58.333333333333336%;
      max-width: 58.333333333333336%;
    }

    &.bk-col-xxl-13 {
      display: block;
      flex: 0 0 54.166666666666664%;
      max-width: 54.166666666666664%;
    }

    &.bk-col-xxl-12 {
      display: block;
      flex: 0 0 50%;
      max-width: 50%;
    }

    &.bk-col-xxl-11 {
      display: block;
      flex: 0 0 45.83333333333333%;
      max-width: 45.83333333333333%;
    }

    &.bk-col-xxl-10 {
      display: block;
      flex: 0 0 41.66666666666667%;
      max-width: 41.66666666666667%;
    }

    &.bk-col-xxl-9 {
      display: block;
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }

    &.bk-col-xxl-8 {
      display: block;
      flex: 0 0 33.33333333333333%;
      max-width: 33.33333333333333%;
    }

    &.bk-col-xxl-7 {
      display: block;
      flex: 0 0 29.166666666666668%;
      max-width: 29.166666666666668%;
    }

    &.bk-col-xxl-6 {
      display: block;
      flex: 0 0 25%;
      max-width: 25%;
    }

    &.bk-col-xxl-5 {
      display: block;
      flex: 0 0 20.833333333333336%;
      max-width: 20.833333333333336%;
    }

    &.bk-col-xxl-4 {
      display: block;
      flex: 0 0 16.666666666666664%;
      max-width: 16.666666666666664%;
    }

    &.bk-col-xxl-3 {
      display: block;
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }

    &.bk-col-xxl-2 {
      display: block;
      flex: 0 0 8.333333333333332%;
      max-width: 8.333333333333332%;
    }

    &.bk-col-xxl-1 {
      display: block;
      flex: 0 0 4.166666666666666%;
      max-width: 4.166666666666666%;
    }

    /*  Offset  */
    &.bk-col-xxl-offset-24 {
      margin-inline-start: 100%;
    }

    &.bk-col-xxl-offset-23 {
      margin-inline-start: 95.83333333333334%;
    }

    &.bk-col-xxl-offset-22 {
      margin-inline-start: 91.66666666666666%;
    }

    &.bk-col-xxl-offset-21 {
      margin-inline-start: 87.5%;
    }

    &.bk-col-xxl-offset-20 {
      margin-inline-start: 83.33333333333334%;
    }

    &.bk-col-xxl-offset-19 {
      margin-inline-start: 79.16666666666666%;
    }

    &.bk-col-xxl-offset-18 {
      margin-inline-start: 75%;
    }

    &.bk-col-xxl-offset-17 {
      margin-inline-start: 70.83333333333334%;
    }

    &.bk-col-xxl-offset-16 {
      margin-inline-start: 66.66666666666666%;
    }

    &.bk-col-xxl-offset-15 {
      margin-inline-start: 62.5%;
    }

    &.bk-col-xxl-offset-14 {
      margin-inline-start: 58.333333333333336%;
    }

    &.bk-col-xxl-offset-13 {
      margin-inline-start: 54.166666666666664%;
    }

    &.bk-col-xxl-offset-12 {
      margin-inline-start: 50%;
    }

    &.bk-col-xxl-offset-11 {
      margin-inline-start: 45.83333333333333%;
    }

    &.bk-col-xxl-offset-10 {
      margin-inline-start: 41.66666666666667%;
    }

    &.bk-col-xxl-offset-9 {
      margin-inline-start: 37.5%;
    }

    &.bk-col-xxl-offset-8 {
      margin-inline-start: 33.33333333333333%;
    }

    &.bk-col-xxl-offset-7 {
      margin-inline-start: 29.166666666666668%;
    }

    &.bk-col-xxl-offset-6 {
      margin-inline-start: 25%;
    }

    &.bk-col-xxl-offset-5 {
      margin-inline-start: 20.833333333333336%;
    }

    &.bk-col-xxl-offset-4 {
      margin-inline-start: 16.666666666666664%;
    }

    &.bk-col-xxl-offset-3 {
      margin-inline-start: 12.5%;
    }

    &.bk-col-xxl-offset-2 {
      margin-inline-start: 8.333333333333332%;
    }

    &.bk-col-xxl-offset-1 {
      margin-inline-start: 4.166666666666666%;
    }

    /* Push */
    &.bk-col-xxl-push-1 {
      inset-inline-start: 4.166666666666666%;
    }

    &.bk-col-xxl-push-2 {
      inset-inline-start: 8.333333333333332%;
    }

    &.bk-col-xxl-push-3 {
      inset-inline-start: 12.5%;
    }

    &.bk-col-xxl-push-4 {
      inset-inline-start: 16.666666666666664%;
    }

    &.bk-col-xxl-push-5 {
      inset-inline-start: 20.833333333333336%;
    }

    &.bk-col-xxl-push-6 {
      inset-inline-start: 25%;
    }

    &.bk-col-xxl-push-7 {
      inset-inline-start: 29.166666666666668%;
    }

    &.bk-col-xxl-push-8 {
      inset-inline-start: 33.33333333333333%;
    }

    &.bk-col-xxl-push-9 {
      inset-inline-start: 37.5%;
    }

    &.bk-col-xxl-push-10 {
      inset-inline-start: 41.66666666666667%;
    }

    &.bk-col-xxl-push-11 {
      inset-inline-start: 45.83333333333333%;
    }

    &.bk-col-xxl-push-12 {
      inset-inline-start: 50%;
    }

    &.bk-col-xxl-push-13 {
      inset-inline-start: 54.166666666666664%;
    }

    &.bk-col-xxl-push-14 {
      inset-inline-start: 58.333333333333336%;
    }

    &.bk-col-xxl-push-15 {
      inset-inline-start: 62.5%;
    }

    &.bk-col-xxl-push-16 {
      inset-inline-start: 66.66666666666666%;
    }

    &.bk-col-xxl-push-17 {
      inset-inline-start: 70.83333333333334%;
    }

    &.bk-col-xxl-push-18 {
      inset-inline-start: 75%;
    }

    &.bk-col-xxl-push-19 {
      inset-inline-start: 79.16666666666666%;
    }

    &.bk-col-xxl-push-20 {
      inset-inline-start: 83.33333333333334%;
    }

    &.bk-col-xxl-push-21 {
      inset-inline-start: 87.5%;
    }

    &.bk-col-xxl-push-22 {
      inset-inline-start: 91.66666666666666%;
    }

    &.bk-col-xxl-push-23 {
      inset-inline-start: 95.83333333333334%;
    }

    &.bk-col-xxl-push-24 {
      inset-inline-start: 100%;
    }

    /* Pull */
    &.bk-col-xxl-pull-1 {
      inset-inline-end: 4.166666666666666%;
    }

    &.bk-col-xxl-pull-2 {
      inset-inline-end: 8.333333333333332%;
    }

    &.bk-col-xxl-pull-3 {
      inset-inline-end: 12.5%;
    }

    &.bk-col-xxl-pull-4 {
      inset-inline-end: 16.666666666666664%;
    }

    &.bk-col-xxl-pull-5 {
      inset-inline-end: 20.833333333333336%;
    }

    &.bk-col-xxl-pull-6 {
      inset-inline-end: 25%;
    }

    &.bk-col-xxl-pull-7 {
      inset-inline-end: 29.166666666666668%;
    }

    &.bk-col-xxl-pull-8 {
      inset-inline-end: 33.33333333333333%;
    }

    &.bk-col-xxl-pull-9 {
      inset-inline-end: 37.5%;
    }

    &.bk-col-xxl-pull-10 {
      inset-inline-end: 41.66666666666667%;
    }

    &.bk-col-xxl-pull-11 {
      inset-inline-end: 45.83333333333333%;
    }

    &.bk-col-xxl-pull-12 {
      inset-inline-end: 50%;
    }

    &.bk-col-xxl-pull-13 {
      inset-inline-end: 54.166666666666664%;
    }

    &.bk-col-xxl-pull-14 {
      inset-inline-end: 58.333333333333336%;
    }

    &.bk-col-xxl-pull-15 {
      inset-inline-end: 62.5%;
    }

    &.bk-col-xxl-pull-16 {
      inset-inline-end: 66.66666666666666%;
    }

    &.bk-col-xxl-pull-17 {
      inset-inline-end: 70.83333333333334%;
    }

    &.bk-col-xxl-pull-18 {
      inset-inline-end: 75%;
    }

    &.bk-col-xxl-pull-19 {
      inset-inline-end: 79.16666666666666%;
    }

    &.bk-col-xxl-pull-20 {
      inset-inline-end: 83.33333333333334%;
    }

    &.bk-col-xxl-pull-21 {
      inset-inline-end: 87.5%;
    }

    &.bk-col-xxl-pull-22 {
      inset-inline-end: 91.66666666666666%;
    }

    &.bk-col-xxl-pull-23 {
      inset-inline-end: 95.83333333333334%;
    }

    &.bk-col-xxl-pull-24 {
      inset-inline-end: 100%;
    }
  }
`

export { StyledCol }
