import React from 'react';
import { useLinkPressHandler } from 'react-router-native';
import AppPaths from '../../../routes/paths';
import { GHIssue } from '../../../types/github';
import styles from './styled';

const { Wrapper, Title, Description, Detail, Info } = styles;

function getDateString(date: string) {
  const obj = new Date(date);
  return [obj.getFullYear(), obj.getMonth(), obj.getDay()].join('.');
}

interface Props {
  data: GHIssue;
}

function IssueItem(props: Props) {
  const { data } = props;
  const handlePressLink = useLinkPressHandler(AppPaths.IssueDetail.path);

  return (
    <Wrapper underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={handlePressLink}>
      <>
        <Detail>
          <Info numberOfLines={1}>{`@${data.user.login}/${getDateString(data.updated_at)}`}</Info>
        </Detail>
        <Title numberOfLines={1}>{data.title}</Title>
        <Description numberOfLines={1}>{data.body}</Description>
      </>
    </Wrapper>
  );
}

export default IssueItem;
