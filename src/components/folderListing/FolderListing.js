import React from 'react'
import {List} from 'semantic-ui-react'

export const FolderListing = () => (
    <List>
        <List.Item>
            <List.Icon name='folder'/>
            <List.Content>
                <List.Header>.git</List.Header>
                <List.List>
                    <List.Item>
                        <List.Icon name='file'/>
                        <List.Content>
                            <List.Header>config</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='file'/>
                        <List.Content>
                            <List.Header>description</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='file'/>
                        <List.Content>
                            <List.Header>HEAD</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='folder'/>
                        <List.Content>
                            <List.Header>hooks</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='file'/>
                        <List.Content>
                            <List.Header>index</List.Header>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='folder'/>
                        <List.Content>
                            <List.Header>info</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='folder'/>
                        <List.Content>
                            <List.Header>objects</List.Header>
                        </List.Content>
                        <List.List>
                            <List.Item>
                                <List.Icon name='folder'/>
                                <List.Content>
                                    <List.Header>98</List.Header>
                                </List.Content>
                                <List.List>
                                    <List.Item>
                                        <List.Icon name='file'/>
                                        <List.Content>
                                            <List.Header
                                                className='red'>0a0d5f19a64b4b30a87d4206aade58726b60e3</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List.List>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='folder'/>
                                <List.Content>
                                    <List.Header>43</List.Header>
                                </List.Content>
                                <List.List>
                                    <List.Item>
                                        <List.Icon name='file'/>
                                        <List.Content>
                                            <List.Header
                                                className='red'>388fee19744e8893467331d7853a6475a227b8</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List.List>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='folder'/>
                                <List.Content>
                                    <List.Header>58</List.Header>
                                </List.Content>
                                <List.List>
                                    <List.Item>
                                        <List.Icon name='file'/>
                                        <List.Content>
                                            <List.Header
                                                className='red'>1caa0fe56cf01dc028cc0b089d364993e046b6</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List.List>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='file'/>
                                <List.Content>
                                    <List.Header>info</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='file'/>
                                <List.Content>
                                    <List.Header>pack</List.Header>
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='folder'/>
                        <List.Content>
                            <List.Header>refs</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Content>
        </List.Item>
    </List>
);
